import React from "react";
import { shallow } from "enzyme";
import Cell from "./index";

describe("[COMPONENT] - Cell", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Cell/>);
    });

    it('Snapshot Cell', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Cell with isFirstRow class', () => {
        expect(wrapper.hasClass('cell--isFirstRow')).toBeFalsy();

        wrapper.setProps({ isFirstRow: true });

        expect(wrapper.hasClass('cell--isFirstRow')).toBeTruthy();
    });

    it('Cell with click on sort', () => {
        const mockCallback = jest.fn();

        wrapper.setProps({ isFirstRow: true, onClickSort: mockCallback });
        wrapper.find('.cell__sort').simulate('click');
        
        expect(mockCallback.mock.calls.length).toEqual(1);
    });
})