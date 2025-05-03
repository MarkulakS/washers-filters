import React, { useEffect, useState } from 'react';
import './DropDownSort.css';

type SortProps = {
    sorting: string[];
    activeMenu: boolean;
    toggleMenu: Function;
    sortingSelection: Function;
};

const DropDownSort: React.FC<SortProps> = ({
    sorting,
    sortingSelection,
}: SortProps) => {

    const [activeMenu, setActiveMenu] = useState<boolean>(false);

    const onClickHandler = (val: string): void => {
        sortingSelection(val);
    };

    useEffect(() => {
        setActiveMenu(activeMenu);
    }, [activeMenu]);

    return (
        <div className="dropdown">
            {sorting.map(
                (val: string, id: number) => {
                    return (
                        <p
                            key={id}
                            onClick={() => {
                                onClickHandler(val);
                            }}>
                            {val}
                        </p>
                    )
                }
            )}
        </div>
    );
}

export default DropDownSort;