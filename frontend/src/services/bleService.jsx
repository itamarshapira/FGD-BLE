//* BLE Service: Handles Bluetooth Low Energy functionality
/**
 *? This service performs:
 ** Discovering BLE devices.
 ** Connecting and disconnecting devices.
 ** Interacting with BLE services and characteristics.
 */

// Replace placeholders with your actual values
const serviceId = "1b7e8251-2877-41c3-b46e-cf057c562023"; //* UUID for accessing specific BLE service
const receiveCharId = "8ac32d3f-5cb9-4d44-bec2-ee689169f626"; //* UUID for receiving data from the device
const devicePrefix = "test"; //* Prefix to filter devices during discovery
const batteryServiceUUID = "0000180f-0000-1000-8000-00805f9b34fb"; // Proper lowercase format
const batteryLevelCharacteristicUUID = "00002a19-0000-1000-8000-00805f9b34fb"; // Proper lowercase format

let device = null; //* Variable to store connected device
let gattServer = null; //* Variable to store GATT server instance

export function logMessage(msg) {
  // * Logs messages to the console for debugging purposes.
  console.log(msg);
}

/**
 ** Connects to a BLE device.
 * - Filters devices based on name prefix.
 * - Connects to the device's GATT server.
 */
export async function connectToDevice() {
  try {
    logMessage("Requesting Bluetooth device...");
    device = await navigator.bluetooth.requestDevice({
      acceptAllDevices: true, //* Allow only filtered devices
      optionalServices: [batteryServiceUUID], // Correctly formatted UUID
      // filters: [{ namePrefix: devicePrefix }], //* Filter devices by prefix
      // optionalServices: [serviceId], //* Specify desired service UUID
    });

    logMessage(`Connecting to GATT server of device: ${device.name}`);
    gattServer = await device.gatt.connect(); //* Establish GATT connection

    logMessage("Connected to GATT server!");

    //LOGIC: Discover and log services and characteristics
    // await readBatteryLevel();
    return true;
  } catch (error) {
    logMessage(`Error connecting to device: ${error.message}`);
    return false;
  }
}

/**
 * Disconnects the connected BLE device.
 */
export function disconnectDevice() {
  if (device && device.gatt.connected) {
    device.gatt.disconnect(); //* Disconnects device
    logMessage("Device disconnected.");
  } else {
    logMessage("No device is connected.");
  }
}

// * Discover Available Services and Characteristics

// export async function discoverServicesAndCharacteristics() {
//   if (!gattServer) {
//     logMessage("No connected device. Connect first.");
//     return;
//   }

//   try {
//     // Get all available services
//     const services = await gattServer.getPrimaryServices();

//     for (const service of services) {
//       logMessage(`Service: ${service.uuid}`); // Log the service UUID

//       // Get characteristics of the service
//       const characteristics = await service.getCharacteristics();
//       for (const characteristic of characteristics) {
//         logMessage(
//           `Characteristic: ${characteristic.uuid} - Properties: ${Object.keys(
//             characteristic.properties
//           ).join(", ")}`
//         );
//       }
//     }
//   } catch (error) {
//     logMessage(
//       `Error discovering services and characteristics: ${error.message}`
//     );
//   }
// }

/**
 * Reads data from a BLE characteristic.
 * - Assumes device is connected and GATT server is available.
 */
export async function readCharacteristic() {
  // if (!gattServer) {
  //   logMessage("No connected device. Connect first.");
  //   return;
  // }
  // try {
  //   // Get the Battery Service
  //   const service = await gattServer.getPrimaryService(
  //     "0000180F-0000-1000-8000-00805f9b34fb"
  //   );
  //   // Get the Battery Level Characteristic
  //   const characteristic = await service.getCharacteristic(
  //     "00002A19-0000-1000-8000-00805f9b34fb"
  //   );
  //   // Read the characteristic's value
  //   const value = await characteristic.readValue();
  //   // Decode the value (assuming UTF-8 text)
  //   const decoder = new TextDecoder("utf-8");
  //   const data = decoder.decode(value);
  //   logMessage(`Received Data: ${data}`);
  //   return data;
  // } catch (error) {
  //   logMessage(`Error reading characteristic: ${error.message}`);
  // }
}

export async function readBatteryLevel() {
  if (!gattServer) {
    logMessage("No connected device. Connect first.");
    return null; // Return null if no device is connected
  }

  try {
    logMessage("Accessing Battery Service...");
    const service = await gattServer.getPrimaryService(batteryServiceUUID);
    const characteristic = await service.getCharacteristic(
      batteryLevelCharacteristicUUID
    );
    const value = await characteristic.readValue();
    const batteryLevel = value.getUint8(0); // Battery level is usually 0-100%
    logMessage(`Battery Level: ${batteryLevel}%`);
    return batteryLevel; // Return the battery level
  } catch (error) {
    logMessage(`Error reading characteristic: ${error.message}`);
    return null; // Return null on error
  }
}
