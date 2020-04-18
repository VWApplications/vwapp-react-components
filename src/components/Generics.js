import React from "react";
import { CustomJson } from "../styles";

export const BreakLine = props => <br {...props} />;

export const Line = props => <hr {...props} />;

export const Json = props => <CustomJson {...props}>{JSON.stringify(props.values, 0, 2)}</CustomJson>;
