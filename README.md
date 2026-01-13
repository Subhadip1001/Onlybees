# OnlyBees Ticket Selection UI Clone

This project is a **clone of the OnlyBees ticket selection interface**, developed as a technical assessment for the **Frontend Developer** role.  
It implements a complete **event booking flow**, from seat selection to **digital ticket generation**.

---

## Emphasis and Highlights

This project focuses on:

- **React state handling**
- **Component-driven architecture**
- **API integration**

The UI is **fully responsive** and follows the **exact color scheme** provided in the requirements.

---

## Project Overview

> *The goal is to create a 1:1 clone of OnlyBees Events that fetches real-time data and manages complex booking states.*

In addition to the core requirements, this implementation includes:

- Checkout timer
- Downloadable digital tickets
- Custom loaders for transitions

---

## Features

### Functional Requirements

- **API Integration**  
  Fetches dynamic ticket availability from the provided endpoint.

- **State Management**  
  Syncs ticket quantities across multiple components using **React Context**.

- **Checkout Summary**  
  Persistent bottom bar calculating:
  - Quantity
  - Subtotal
  - GST
  - Grand Total

- **Data Logging**  
  Final booking data is printed to the console upon checkout.

---

## Technical Stack

| Category     | Technology Used                |
|--------------|--------------------------------|
| Framework    | React + Vite                    |
| Styling      | Tailwind CSS                    |
| Icons        | React Icons                     |
| Build Tool   | Vite                            |

---

## Application Flow

### 1. Discovery & Selection

- User lands on the event page
- Navigates to the **Tickets** section
- Selects tickets using **+ / −** buttons
- **Validation:** Maximum of **5 tickets per category**

---

### 2. Review & Transition

- Checkout bar updates in **real time**
- Clicking **Proceed** triggers a loader animation
- User is redirected to the **Checkout Page**

---

### 3. Fulfillment

- User enters personal details:
  - Name
  - Email
  - Phone
- A **7-minute timer** starts to hold the seats
- On clicking **Checkout**:
  - Booking data is logged via `console.log`
  - A digital ticket is generated and displayed
  - User can click **Download Ticket** to save a PNG

---

## Folder Structure

```
src/
├── components/     # UI components (Artist, Booking, EventGuide, etc.)
├── pages/          # Page components (Home, CheckoutPage, BookingTickets)
├── data/           # Static data files
├── assets/         # Images and media assets
├── App.jsx         # Main app component
├── main.jsx        # Entry point
└── index.css       # Global styles
```

---

## How to Use

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

---

### 2. Start the Development Server

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173` (or the port Vite assigns).

---

### 3. Build for Production

```bash
npm run build
```

---

### 4. Verify Checkout

Open the browser console and click **Checkout** on the final screen to view the logged booking data.

---

## AI Usage & Research

As per assignment requirements, AI was used for:

- **Complex Logic**  
  Refining state management for GST and booking fee calculations

- **Component Styling**  
  Generating Tailwind utility combinations for UI components

- **Troubleshooting**  
  Fixing canvas scaling issues for high-resolution ticket downloads

---

## Summary

This project demonstrates real-world handling of:

- Complex UI states
- Real-time calculations
- Responsive layouts
- Production-ready component design
- Event booking workflows
