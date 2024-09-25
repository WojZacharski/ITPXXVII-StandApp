import React from 'react';
import { shallow } from 'enzyme';
import { StandS } from "../components/stands/StandS";
import { StandMS } from "../components/stands/StandMS";
import { Stand4 } from "../components/stands/Stand4";
import { Stand6 } from "../components/stands/Stand6";
import { Stand8 } from "../components/stands/Stand8";

describe("Stand Components", () => {
    const standsComponents = [
        {
            component: Stand4,
            props: {
                height: "20",
                width: "20",
                type: "4"
            }
        },
        {
            component: Stand6,
            props: {
                height: "20",
                width: "30",
                type: "6"
            }
        },
        {
            component: Stand8,
            props: {
                height: "20",
                width: "40",
                type: "8"
            }
        },
        {
            component: StandS,
            props: {
                height: "20",
                width: "40",
                type: "S"
            }
        },
        {
            component: StandMS,
            props: {
                height: "20",
                width: "60",
                type: "MS"
            }
        }];

    standsComponents.forEach((stand, index) => {
        it('should render and match snapshot' + index, () => {
            const component = shallow(<stand.component />);
            expect(component.props()).toStrictEqual(stand.props);
        });
    })

});