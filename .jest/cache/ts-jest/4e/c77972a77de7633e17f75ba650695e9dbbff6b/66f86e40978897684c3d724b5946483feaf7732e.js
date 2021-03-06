"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
//import { AppStore } from '@common/event/store/app.store';
const app_store_1 = require("./modules/common/event/store/app.store");
/* Redux */
const react_redux_1 = require("react-redux");
/** Components */
const main_component_1 = __importDefault(require("./src/main/main.component"));
/** Register Services */
class App extends react_1.Component {
    componentDidMount() { }
    render() {
        return (react_1.default.createElement(react_redux_1.Provider, { store: app_store_1.AppStore },
            react_1.default.createElement(main_component_1.default, null)));
    }
}
exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXERldmVsb3BtZW50XFxuamFwcGxpY2F0aW9uc1xcd3V3aW5cXEFwcC50c3giLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7Ozs7Ozs7Ozs7OztBQUVILCtDQUF5QztBQUl6QywyREFBMkQ7QUFDM0Qsc0VBQWtFO0FBRWxFLFdBQVc7QUFDWCw2Q0FBdUM7QUFFdkMsaUJBQWlCO0FBQ2pCLCtFQUF1RDtBQUV2RCx3QkFBd0I7QUFHeEIsTUFBcUIsR0FBSSxTQUFRLGlCQUFnQjtJQUUvQyxpQkFBaUIsS0FBSyxDQUFDO0lBRXZCLE1BQU07UUFDSixPQUFPLENBQ0wsOEJBQUMsc0JBQVEsSUFBQyxLQUFLLEVBQUUsb0JBQVE7WUFDckIsOEJBQUMsd0JBQWEsT0FBRyxDQUNWLENBQ1osQ0FBQztJQUNKLENBQUM7Q0FDRjtBQVhELHNCQVdDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxEZXZlbG9wbWVudFxcbmphcHBsaWNhdGlvbnNcXHd1d2luXFxBcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU2FtcGxlIFJlYWN0IE5hdGl2ZSBBcHBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmVcbiAqIEBmbG93XG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuLyogQ29tbW9uICovXG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJ0Bjb21tb24vY29tcG9uZW50L2NvbW1vbi5wcm9wcyc7XG4vL2ltcG9ydCB7IEFwcFN0b3JlIH0gZnJvbSAnQGNvbW1vbi9ldmVudC9zdG9yZS9hcHAuc3RvcmUnO1xuaW1wb3J0IHsgQXBwU3RvcmUgfSBmcm9tICcuL21vZHVsZXMvY29tbW9uL2V2ZW50L3N0b3JlL2FwcC5zdG9yZSc7IFxuXG4vKiBSZWR1eCAqL1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbi8qKiBDb21wb25lbnRzICovXG5pbXBvcnQgIE1haW5Db21wb25lbnQgZnJvbSAnLi9zcmMvbWFpbi9tYWluLmNvbXBvbmVudCc7XG5cbi8qKiBSZWdpc3RlciBTZXJ2aWNlcyAqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHt9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e0FwcFN0b3JlfT5cbiAgICAgICAgICA8TWFpbkNvbXBvbmVudCAvPlxuICAgICAgPC9Qcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbiJdLCJ2ZXJzaW9uIjozfQ==