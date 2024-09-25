import React from 'react';
import {mount} from 'enzyme';
import {languageData, mockData, MockDataProvider} from "./__mocks__/MockDataProvider";
import {LanguageSelector} from "../components/LanguageSelector";

describe("LanguageSelector Component", () => {
    const component = mount(<MockDataProvider>
        <LanguageSelector/>
    </MockDataProvider>);

    it('should render and match snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('should click PL', () => {
        component.find('span').first().simulate('click');
        expect(languageData.setLanguage).toHaveBeenCalledTimes(1);
        expect(languageData.setLanguage).toHaveBeenCalledWith("PL");
    });

    it('should click EN', () => {
        component.find('span').at(1).simulate('click');
        expect(languageData.setLanguage).toHaveBeenCalledTimes(2);
        expect(languageData.setLanguage).toHaveBeenCalledWith("EN");
    });
});