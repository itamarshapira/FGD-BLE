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

let device = null; //* Variable to store connected device
let gattServer = null; //* Variable to store GATT server instance

export function logMessage(msg) {
  // * Logs messages to the console for debugging purposes.
  console.log(msg);
}

/**
 * Connects to a BLE device.
 * - Filters devices based on name prefix.
 * - Connects to the device's GATT server.
 */
export async function connectToDevice() {
  try {
    logMessage("Requesting Bluetooth device...");
    device = await navigator.bluetooth.requestDevice({
      acceptAllDevices: false, //* Allow only filtered devices
      filters: [{ namePrefix: devicePrefix }], //* Filter devices by prefix
      optionalServices: [serviceId], //* Specify desired service UUID
    });

    logMessage(`Connecting to GATT server of device: ${device.name}`);
    gattServer = await device.gatt.connect(); //* Establish GATT connection

    logMessage("Connected to GATT server!");
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

/**
 * Reads data from a BLE characteristic.
 * - Assumes device is connected and GATT server is available.
 */
export async function readCharacteristic() {
  if (!gattServer) {
    logMessage("No connected device. Connect first.");
    return;
  }

  try {
    const service = await gattServer.getPrimaryService(serviceId); //* Access specified service
    const characteristic = await service.getCharacteristic(receiveCharId); //* Access specified characteristic
    const value = await characteristic.readValue(); //* Read data
    const receivedData = value.getUint8(0); //* Decode data
    logMessage(`Received Data: ${receivedData}`);
    return receivedData; //* Return decoded data
  } catch (error) {
    logMessage(`Error reading characteristic: ${error.message}`);
  }
}
