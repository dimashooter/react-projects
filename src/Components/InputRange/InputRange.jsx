import { Slider} from 'antd';
import React from 'react'

function InputRange({handlePostsChange,postsToShow}) {

    const marks = {
        0: '0',
        50: '50',
        100: {
          style: {
            color: '#f50',
          },
          label: <strong>100</strong>,
        },
      };

    return (
        <div>
            <h1>Choose posts to show</h1>
            <Slider marks={marks} tooltipPlacement="bottomLeft" value={postsToShow} onChange={handlePostsChange} className="inputRange" />
        </div>
        
    )
}

export default InputRange
