import IAlert from 'inkline/components/Alert';
import IBadge from 'inkline/components/Badge';
import IBreadcrumb from 'inkline/components/Breadcrumb';
import IBreadcrumbItem from 'inkline/components/BreadcrumbItem';
import IButton from 'inkline/components/Button';
import IButtonGroup from 'inkline/components/ButtonGroup';
import ICard from 'inkline/components/Card';
import ICollapsible from 'inkline/components/Collapsible';
import ICollapsibleItem from 'inkline/components/CollapsibleItem';
import IColumn from 'inkline/components/Column';
import IContainer from 'inkline/components/Container';
import IDropdown from 'inkline/components/Dropdown';
import ILayout from 'inkline/components/Layout';
import ILayoutAside from 'inkline/components/LayoutAside';
import ILayoutContent from 'inkline/components/LayoutContent';
import ILayoutFooter from 'inkline/components/LayoutFooter';
import ILayoutHeader from 'inkline/components/LayoutHeader';
import IRow from 'inkline/components/Row';

import ICheckbox from 'inkline/components/Checkbox';
import ICheckboxButton from 'inkline/components/CheckboxButton';
import ICheckboxGroup from 'inkline/components/CheckboxGroup';
import ICheckboxButtonGroup from 'inkline/components/CheckboxButtonGroup';
import IInput from 'inkline/components/Input';
import IInputGroup from 'inkline/components/InputGroup';
import IInputNumber from 'inkline/components/InputNumber';
import IRadio from 'inkline/components/Radio';
import IRadioButton from 'inkline/components/RadioButton';
import IRadioGroup from 'inkline/components/RadioGroup';
import IRadioButtonGroup from 'inkline/components/RadioButtonGroup';
import ITextarea from 'inkline/components/Textarea';

class Inkline {
    static components = [
        IAlert,
        IBadge,
        IBreadcrumb,
        IBreadcrumbItem,
        IButton,
        IButtonGroup,
        ICard,
        ICollapsible,
        ICollapsibleItem,
        IColumn,
        IContainer,
        IDropdown,
        ILayout,
        ILayoutAside,
        ILayoutContent,
        ILayoutFooter,
        ILayoutHeader,
        IRow,

        ICheckbox,
        ICheckboxButton,
        ICheckboxGroup,
        ICheckboxButtonGroup,
        IInput,
        IInputGroup,
        IInputNumber,
        IRadio,
        IRadioButton,
        IRadioGroup,
        IRadioButtonGroup,
        ITextarea
    ];

    constructor () {
        if (typeof window !== 'undefined' && window.Vue) {
            this.install(window.Vue);
        }
    }

    static install (Vue) {
        this.components.map(component => {
            Vue.component(component.name, component);
        });
    }
}

export {
    IAlert,
    IBadge,
    IBreadcrumb,
    IBreadcrumbItem,
    IButton,
    IButtonGroup,
    ICard,
    ICollapsible,
    ICollapsibleItem,
    IColumn,
    IContainer,
    IDropdown,
    ILayout,
    ILayoutAside,
    ILayoutContent,
    ILayoutFooter,
    ILayoutHeader,
    IRow,

    ICheckbox,
    ICheckboxButton,
    ICheckboxGroup,
    ICheckboxButtonGroup,
    IInput,
    IInputGroup,
    IInputNumber,
    IRadio,
    IRadioButton,
    IRadioGroup,
    IRadioButtonGroup,
    ITextarea,

    Inkline
};

export default Inkline;