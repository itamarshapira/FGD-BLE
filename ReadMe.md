# FGD BLE Interface

This project is a **Bluetooth Low Energy (BLE) interface** built using **React**. The primary goal is to connect to BLE-enabled devices, read data , and dynamically display it in an interactive and user-friendly web interface.

---

## 📋 **Project Overview**

The application will provides the following functionalities:

- **Device Connection:** Connect to BLE devices using a filtered list or specific device prefix.
- **Real-Time Data:** Read data such as battery levels or other characteristics from connected devices.
- **Dynamic Interface:** Use tabs to organize and display information interactively.
- **BLE Controls:** Easily connect, read, and disconnect from devices through the interface.

---

## 🛠️ **Features Implemented**

### 1. **Bluetooth Low Energy (BLE) Service**

- Establishes connection with BLE devices using the Web Bluetooth API.
- Reads specific characteristics like battery levels.
- Allows seamless connection and disconnection through dynamic states.

### 2. **Dynamic Tabs Component**

- Interactive tab-based navigation to switch between multiple content sections.
- Tabs are generated dynamically using a single reusable structure.
- Highlights the active tab for better user experience.

### 3. **Responsive Navbar**

- Includes a Bluetooth icon to handle BLE connections.
- Displays battery levels retrieved from connected devices.

### 4. **Reusable Logo Component**

- Features a parallax tilt effect for a modern and engaging design.
- Used as part of the application’s visual identity.

---

## 🖥️ **Project Structure**

The project is organized into the following directories:

- **`/src/components`**:
  - **`Navbar`**: Contains the Navbar component to manage BLE connections and display battery levels.
  - **`Tabs`**: Dynamic tab component for organizing and displaying content.
  - **`Logo`**: Includes the logo with tilt effect.
- **`/src/services`**:
  - **`bleService`**: Handles BLE-related functionality (connect, disconnect, read characteristics).
- **`/public`**: Static files for the project.

---

## 🚀 **Getting Started**

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/itamarshapira/FGD-BLE.git
   ```
2. Navigate to the project directory:
   ```bash
   cd FGD-BLE/frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:

```bash
npm start
```

Open your browser and navigate to `http://localhost:3000`.

---

## 📂 **Key Files**

- **`Navbar.jsx`**: Manages BLE connections and displays battery levels.
- **`Tabs.jsx`**: Implements dynamic tabs for easy navigation.
- **`bleService.js`**: Core logic for BLE operations (connect, read, disconnect).
- **`Logo.jsx`**: Displays the logo with tilt effects.

---

## 📜 **License**

This project is licensed under the MIT License. See the LICENSE file for details.
