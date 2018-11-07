import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import { setupMount, findByText } from '../../shared/test_helpers_react';
import sinon from 'sinon';
const faker = require('faker');

import App from '../../App.jsx';
import RightButton from '../RightButton';
import LeftButton from '../LeftButton';
import PhotoGallery from '../PhotoGallery';
import PhotoHolder from '../PhotoHolder';
import PhotoSubList from '../PhotoSubList';
import ReturnHome from '../ReturnHome';

const spy = sinon.spy();

describe('<App/>', () => {
    test('it should render correctly', () => {
        const wrapper = mount(<App/>);
        expect(wrapper.exists()).toBe(true);
    });
    it('should have proper state values', () => {
        const wrapper = mount(<App/>);
        expect(wrapper.state().feed).toEqual([]);
        expect(wrapper.state().view).toEqual('home');
        setTimeout(() => {
            wrapper.update();
            expect(wrapper.state().feed.length).toBe(10);
            expect(wrapper.state().view).toBe('home');
        }, 75)
    })
})

describe('RightButton', () => {
    it('should render and allow for debugging', () => {
        const component = shallow(<RightButton />);
        console.log(component.debug());
    })
    describe('()onClick', () => [
        test('actually calls the damn click handler', () => {
            const mockClick = jest.fn();
            const wrapper = shallow(<RightButton onClick={mockClick}/>);
            const component = wrapper.dive();
            component.find('div').simulate('click');
            expect(mockClick.mock.call.length).toEqual(1);
        })
    ])
})

describe('LeftButton', () => {
    it('should render and allow for debugging', () => {
        const w = shallow(<LeftButton/>);
        console.log(w.debug());
    })
    it('should allow for click events', () => {
        const wrapper = mount(<LeftButton/>);
        wrapper.props.goToPrevSlide = jest.fn();
        wrapper.find('.prevArrow').simulate('click');
        expect(wrapper.props.goToPrevSlide).toHaveBeenCalled();
    })
})

describe('PhotoHolder', () => {
    it('should take it picture array data correctly', () => {
        const sampleData = [
                "http://dummyimage.com/700x700.png/cc0000/ffffff",
                "http://dummyimage.com/700x700.jpg/5fa2dd/ffffff",
                "http://dummyimage.com/700x700.bmp/ef945b/000000",
                "http://dummyimage.com/700x700.bmp/ef945b/000000",
                "http://dummyimage.com/700x700.bmp/ef945b/000000",
        ];
        const w = mount(<PhotoHolder feed={sampleData} />);
        // console.log(w.debug());
        expect(w.props().feed.length).toBe(5);
    })
    // it('should only display 5 pictures no matter how many are entered', () => {
    //     const sampleData = [
    //         "http://dummyimage.com/700x700.png/cc0000/ffffff",
    //         "http://dummyimage.com/700x700.jpg/5fa2dd/ffffff",
    //         "http://dummyimage.com/700x700.bmp/ef945b/000000",
    //         "http://dummyimage.com/700x700.bmp/ef945b/000000",
    //         "http://dummyimage.com/700x700.bmp/ef945b/000000",
    //         "http://dummyimage.com/700x700.bmp/ef945b/000000",
    //         "http://dummyimage.com/700x700.bmp/ef945b/000000",
    //         "http://dummyimage.com/700x700.bmp/ef945b/000000",
    //         "http://dummyimage.com/700x700.bmp/ef945b/000000",
    //     ];
    //     const w = mount(<PhotoHolder feed={sampleData}/>);
    //     const target = w.find('.col-holder');
    //     console.log(target, 'this is target var')
    //     expect(target.children.length).toBe(5);
    // })
})

describe('PhotoGallery', () => {
    it('should have as many descriptions as it does pictures', ()=> {
        const sampleData = [
            "http://dummyimage.com/700x700.png/cc0000/ffffff",
            "http://dummyimage.com/700x700.jpg/5fa2dd/ffffff",
            "http://dummyimage.com/700x700.bmp/ef945b/000000",
            "http://dummyimage.com/700x700.bmp/ef945b/000000",
            "http://dummyimage.com/700x700.bmp/ef945b/000000",
        ];
        const descData = [
            faker.lorem.sentence(),
            faker.lorem.sentence(),
            faker.lorem.sentence(),
            faker.lorem.sentence(),
            faker.lorem.sentence(),
        ];
        const w = mount(<PhotoGallery feed={sampleData} descFeed={descData}/>);
        expect(w.props().feed.length).toBe(5);
        expect(w.props().descFeed.length).toBe(5);
    })
})

//desc array and pic array should be same length