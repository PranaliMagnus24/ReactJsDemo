import { useState } from 'react';

const useToggle=(defaultVal)=>{
    const [value, setValue] = useState(defaultVal);
    
    const toggleValue = (newValue) => {
        if (typeof newValue === 'boolean') {
            setValue(newValue);
        } else {
            setValue(prev => !prev);
        }
    };

    return [value, toggleValue];            
}
export default useToggle