import PhotoGallery from '../PhotoGallery';
import React from 'react';
import sinon from 'sinon';
import {shallow, mount} from 'enzyme';

describe('PhotoGaller', () => {
    it('has click events', () => {
        const onButtonClick = sinon.spy();
        const w = mount((<PhotoGallery onClick={onButtonClick}/>));
        w.find('button').simulate('click');
        expect(onButtonClick).to.have.property(setHovered);
    })
})

//consider using fingByText. itll look for stuff with certain text in it