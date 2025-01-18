# React Modern Toaster 🔔

[![npm version](https://img.shields.io/npm/v/react-modern-toaster)](https://www.npmjs.com/package/react-modern-toaster)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dt/react-modern-toaster.svg)](https://www.npmjs.com/package/react-modern-toaster)

A lightweight, customizable, and TypeScript-ready toast notification system for modern React applications.

![Toast Demo](https://via.placeholder.com/600x200.png?text=Toast+Demo)

## ✨ Features

- 🚀 **Lightweight & Fast**: Zero external dependencies
- 📱 **Responsive**: Works seamlessly on all screen sizes
- 🎨 **Customizable**: Easy to style and adapt to your theme
- 💪 **TypeScript Support**: Built with TypeScript for better development experience
- 🔄 **Auto Dismiss**: Configurable auto-dismiss functionality
- 🎯 **Multiple Types**: Success, Error, Warning, and Info toasts
- ⚡ **Easy Integration**: Simple API with React Context

## 🔧 Installation

```bash
npm install react-modern-toaster
# or
yarn add react-modern-toaster
# or
pnpm add react-modern-toaster
```

## 🚀 Quick Start

1. Wrap your app with the `ToastProvider`:

```jsx
// main.jsx or main.tsx
import { ToastProvider } from 'react-modern-toaster'

function App() {
  return (
    <ToastProvider>
      <YourApp />
    </ToastProvider>
  )
}
```

2. Add the `ToastContainer` to your app:

```jsx
// App.jsx or App.tsx
import { ToastContainer } from 'react-modern-toaster'

function YourApp() {
  return (
    <>
      <YourComponents />
      <ToastContainer />
    </>
  )
}
```

3. Use the `useToast` hook to show toasts:

```jsx
import { useToast } from 'react-modern-toaster'

function MyComponent() {
  const { addToast } = useToast()

  const showSuccessToast = () => {
    addToast({
      message: 'Operation successful!',
      type: 'success',
      duration: 3000
    })
  }

  return (
    <button onClick={showSuccessToast}>
      Show Success Toast
    </button>
  )
}
```

## 📖 API Reference

### ToastProvider

The context provider that should wrap your application.

```jsx
<ToastProvider>
  <App />
</ToastProvider>
```

### useToast Hook

```typescript
const { addToast, removeToast, toasts } = useToast()

// Add a toast
addToast({
  message: string,
  type: 'success' | 'error' | 'warning' | 'info',
  duration?: number // in milliseconds, defaults to 3000
})

// Remove a specific toast
removeToast(id: string)
```

### Toast Types

```typescript
type ToastType = 'success' | 'error' | 'warning' | 'info'

interface ToastProps {
  id: string
  message: string
  type: ToastType
  duration?: number
}
```

## 🎨 Customization

The toasts can be customized using CSS classes. Each toast type has its own class for easy styling:

```css
.toast-success {
  /* Custom styles for success toast */
}

.toast-error {
  /* Custom styles for error toast */
}

.toast-warning {
  /* Custom styles for warning toast */
}

.toast-info {
  /* Custom styles for info toast */
}
```

## 🌟 Examples

### Different Toast Types

```jsx
function ToastDemo() {
  const { addToast } = useToast()

  return (
    <div>
      <button onClick={() => addToast({ 
        message: 'Success!', 
        type: 'success' 
      })}>
        Success Toast
      </button>

      <button onClick={() => addToast({ 
        message: 'Error occurred!', 
        type: 'error' 
      })}>
        Error Toast
      </button>

      <button onClick={() => addToast({ 
        message: 'Warning!', 
        type: 'warning' 
      })}>
        Warning Toast
      </button>

      <button onClick={() => addToast({ 
        message: 'Info message', 
        type: 'info' 
      })}>
        Info Toast
      </button>
    </div>
  )
}
```

## 📝 License

MIT © [Your Name]

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/react-modern-toaster/issues).

## 💖 Support

Give a ⭐️ if this project helped you!

---

Made with ❤️ by [Your Name]