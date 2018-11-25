import React from "react";
import ee from "event-emitter";

const Context = React.createContext(ee({}));

export default Context;
