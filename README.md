# React Base Course

This basic React app is used to show the lifecycle of a React component.

## Install

```sh
npm install
```

or

```sh
bun i
```

## Run

```sh
npm run dev
```

or

```sh
bun dev
```

## What should I see?

The goal of this App is showing the lifecycle of a React component, when started should show a white page, with a button to show/hide a component. The component, if displayed, show a button for increment a local counter.

Into the `console` of the browser you should see a log for every time the `ExampleComponent` is mounted, unmounted and rendered.

### Expected logs

- A `App rendered` line everytime you show/hide the `ExampleComponent`.
- A `Component mounted` line everytime you show the `ExampleComponent`.
- A `Component unmounted` line everytime you hide the `ExampleComponent`.
- A `Component rendered` line everytime you show the `ExampleComponent` **OR** every time you click on the button to increment the counter.

Actually, because the `StrictMode` is set you should expect the mount, unmount e re-mount of the `ExampleComponent` everytime you click on the button to disply the component.