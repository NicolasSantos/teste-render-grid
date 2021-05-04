import React from "react";
import { shallow } from "enzyme";
import Button from "./index";

describe("[COMPONENT] - Button", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Button/>);
    });

    it('Snapshot Button', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Render button with icon', () => {
        const iconElement = <i>Icon</i>
    
        expect(wrapper.contains(iconElement)).toBeFalsy();

        wrapper.setProps({ icon: iconElement });

        expect(wrapper.contains(iconElement)).toBeTruthy();
    });

    it('Click button', () => {
        const mockCallback = jest.fn();
    
        const button = shallow((<Button onClick={mockCallback}/>));
        button.find('button').simulate('click');
        
        expect(mockCallback.mock.calls.length).toEqual(1);
    });
})