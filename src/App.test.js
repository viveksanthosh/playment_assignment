import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { App } from './App';
import sinon from 'sinon';

configure({ adapter: new Adapter() });

describe('Up button Test', () => {

    let init = (folders = [], path = '', actions = {}) => {
        let props = {
            folders,
            path
        }
        return mount(<App {...props} {...actions} />)
    };

    it('It should call the error action with the right message if user is already int eh uppermost folder', () => {
        let spy = sinon.spy();
        let action = { generalActions: { error: spy } }
        let appDom = init(undefined, './', action);
        appDom.find('#up').simulate('click');
        expect(spy.called).toBe(true);
        expect(spy.calledWith('Already at the topmost folder')).toBe(true);
    })

    it('It should call the updateFolders action with with the above folder', () => {
        let spy = sinon.spy();
        let action = { folderActions: { updateFolders: spy } }
        let appDom = init(undefined, './vivek/test', action);
        appDom.find('#up').simulate('click');
        expect(spy.called).toBe(true);
        expect(spy.calledWith('./vivek')).toBe(true);
    })

});


describe('Add folder button Test', () => {

    let init = (folders = [], path = '', actions = {}) => {
        let props = {
            folders,
            path
        }
        return mount(<App {...props} {...actions} />)
    };

    it('It should add a folder if the user gives a foler name', () => {
        let actionSpy = sinon.spy();
        let promptSpy = sinon.spy();
        let folderName = 'folder_name', path = './vivek'
        let action = { folderActions: { addFolder: actionSpy } };
        window.prompt = () => {
            promptSpy();
            return folderName
        }
        let appDom = init(undefined, path, action);
        appDom.find('#add').simulate('click');
        expect(promptSpy.called).toBe(true);
        expect(actionSpy.calledWith(folderName, path)).toBe(true);
    })

    it('It should not add a folder if the user does not give a foler name', () => {
        let actionSpy = sinon.spy();
        let promptSpy = sinon.spy();
        let folderName = null, path = './vivek'
        let action = { folderActions: { addFolder: actionSpy } };
        window.prompt = () => {
            promptSpy();
            return folderName
        }
        let appDom = init(undefined, path, action);
        appDom.find('#add').simulate('click');
        expect(promptSpy.called).toBe(true);
        expect(actionSpy.called).toBe(false);
    })

    it('It should add a folder if with a name conflict of the user approves', () => {
        let actionSpy = sinon.spy();
        let promptSpy = sinon.spy();
        let confirmSpy = sinon.spy();
        let folderName = 'folder_name', path = './vivek'
        let action = { folderActions: { addFolder: actionSpy } };
        window.prompt = () => {
            promptSpy();
            return folderName
        }

        window.confirm = () => {
            confirmSpy();
            return true
        }
        let appDom = init([folderName], path, action);
        appDom.find('#add').simulate('click');
        expect(promptSpy.called).toBe(true);
        expect(confirmSpy.called).toBe(true);
        expect(actionSpy.calledWith(folderName, path)).toBe(true);
    })

    it('It should not add a folder if with a name conflict of the user disapproves', () => {
        let actionSpy = sinon.spy();
        let promptSpy = sinon.spy();
        let confirmSpy = sinon.spy();
        let folderName = 'folder_name', path = './vivek'
        let action = { folderActions: { addFolder: actionSpy } };
        window.prompt = () => {
            promptSpy();
            return folderName
        }

        window.confirm = () => {
            confirmSpy();
            return false
        }
        let appDom = init([folderName], path, action);
        appDom.find('#add').simulate('click');
        expect(promptSpy.called).toBe(true);
        expect(confirmSpy.called).toBe(true);
        expect(actionSpy.called).toBe(false);
    })

});


describe('Click on element test', () => {

    let init = (folders = [], path = '', actions = {}) => {
        let props = {
            folders,
            path
        }
        return mount(<App {...props} {...actions} />)
    };

    it.only('It should add call the updateFolders action with the right path when an element is tapped', () => {
        let actionSpy = sinon.spy();
        let folderName = 'test', path = './vivek'
        let action = { folderActions: { updateFolders: actionSpy } };
        window.prompt = () => {
            promptSpy();
            return folderName
        }
        let appDom = init([folderName], path, action);
        appDom.find('.element').first().simulate('click');
        expect(actionSpy.calledWith(`${path}/${folderName}/`)).toBe(true);
    })


});
