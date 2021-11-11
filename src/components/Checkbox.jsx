import React, { useState } from "react";

const Checkbox = () => {
	const [allValue, setAllValue] = useState([]);

    const inputs = [
        {
            label: "e",
            text: "tout séléctionner",
            keyID: 4,
        },
        {
            label: "a",
            text: "premier input",
            keyID: 0,
        },
        {
            label: "b",
            text: "second input",
            keyID: 1,
        },
        {
            label: "c",
            text: "troisième input",
            keyID: 2,
        },
        {
            label: "d",
            text: "quatrième input",
            keyID: 3,
        },
    ];

	/**
     * Handle change function of checkbox
	 * @param value Event
	 * @param label String
	 */
	const handleChange = (
		value,
		label
	) => {
		if (value.target.checked === true || label === "e") {
			// If label is "e" and the array is empty, fill with all value
			// else, remove all value
			if (label === "e") {
                if (allValue.length === 0) {
                    setAllValue(inputs.map(item => {
                        return item.label;
                    }));
                } else {
                    setAllValue([]);
                }
			} else {
                // If label is not "e", fill with previous value and new value
				setAllValue([...allValue, label]);

                // If allValue is equal to inputs and "e" is not exist, add value into allValue
                if (allValue.length+1 === inputs.length-1 && allValue.indexOf("e") === -1) {
                    setAllValue([...allValue, label, "e"]);
                }
			}
		} else {
			// remove item from list
			setAllValue(allValue.filter((item) => {
                if (item !== "e") {
                    return item !== label
                }
            }));
		}
	};

	return (
		<div>
			{inputs.map(({ label, keyID, text }) => {
				// Check the current index of the checkbox for change the checked properties
				// the index of map and keyID doesn't work correctly for that case
				const index = allValue.findIndex((item) => item === label);
				return (
					<div key={keyID}>
						<input
							name={label}
							value={label}
							checked={allValue[index] !== undefined || false}
							type="checkbox"
							id={`inline-checkbox-${keyID}`}
							onChange={(e) => handleChange(e, label)}
						/>
						<label
							htmlFor={`inline-checkbox-${keyID}`}
						>
							{text}
						</label>
					</div>
				);
			})}
		</div>
	);
};

export default Checkbox;
