import { DropResult } from 'react-beautiful-dnd';

export default (result: DropResult, callback: () => void) => {
    if (!result.destination) {
        return;
    }

    if (result.destination.index === result.source.index) {
        return;
    }

    callback();
};
