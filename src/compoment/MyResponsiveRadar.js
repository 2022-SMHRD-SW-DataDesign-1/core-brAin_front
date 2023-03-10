import React from 'react'
import { ResponsiveRadar } from '@nivo/radar'
import data from"../json/data.json"
import "../Css/radar.css";
const MyResponsiveRadar = () => {
  return (
    <div className='radarArea'>
      
       <ResponsiveRadar
        data={data}
        keys={[ '정상', '현재개체' ]}
        indexBy="taste"
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: 'color' }}
        gridLabelOffset={36}
        dotSize={12}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        colors={{ scheme: 'nivo' }}
        blendMode="multiply"
        motionConfig="wobbly"
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX:-50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999',
                symbolSize: 15,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />

    </div>
  )
}

export default MyResponsiveRadar