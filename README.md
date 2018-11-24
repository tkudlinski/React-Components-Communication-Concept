This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React Components Communication Concept [POC]

The goal of this app is to provide the way of communication between React components.
The assumption is that those components are not sibling and are not sharing any ancestor (excluding main app component).

The soultion uses React context and [event-emitter](https://github.com/medikoo/event-emitter) pattern.

