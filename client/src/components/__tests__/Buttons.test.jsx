import RightButton from '../RightButton';
import LeftButton from '../LeftButton';
import { setupMount } from '../../shared/test_helpers_react';
import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';

describe('RightButton', () => {
    it('should render', () => {
        const component = shallow(<RightButton />);
        console.log(component.debug());
    })
})

describe('LeftButton', () => {
    it('should render', () => {
        const w = shallow(<LeftButton/>);
        console.log(w.debug());
    })
})