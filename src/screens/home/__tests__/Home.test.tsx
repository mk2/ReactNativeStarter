import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import Home from "../Home";

test("dummy test", async () => {
  const wrapper = shallow(<Home />);
});
