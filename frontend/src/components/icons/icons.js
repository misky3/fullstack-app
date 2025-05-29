import {ReactComponent as debtSvg} from '../../assets/debts.svg';
import {ReactComponent as foodSvg} from '../../assets/food.svg';
import {ReactComponent as closeSvg} from '../../assets/icon-close.svg';
import {ReactComponent as restSvg} from '../../assets/ocio.svg';
import {ReactComponent as rentSvg} from '../../assets/rent.svg';
import {ReactComponent as hygieneSvg} from '../../assets/salud.svg';
import {ReactComponent as savingSvg} from '../../assets/savings.svg';
import {ReactComponent as subscriptionSvg} from '../../assets/supscription.svg';
import {ReactComponent as variousSvg} from '../../assets/Various.svg';

const withDefaults = (IconComponent, defaultSize = 48) => (props) => {
    const {width = defaultSize, height = defaultSize, ...rest} = props;
    return <IconComponent width={width} height={height} {...rest}/>;
};

export const icons ={
    debt: withDefaults(debtSvg),
    food: withDefaults(foodSvg),
    close: withDefaults(closeSvg),
    rest: withDefaults(restSvg),
    rent: withDefaults(rentSvg),
    hygiene: withDefaults(hygieneSvg),
    saving: withDefaults(savingSvg),
    subscription: withDefaults(subscriptionSvg),
    various: withDefaults(variousSvg)
};