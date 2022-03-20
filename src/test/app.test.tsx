import {render} from "@testing-library/react";
import App from "../components/app";

describe('Component app works', () => {
   test('app is visible', () => {
      const view = render(<App/>);
      expect(view).toMatchSnapshot();
   });
});