import React from 'react';
import { Alert } from 'reactstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useSelector } from 'react-redux'
//example
{/*

    <Graphic/>

*/}

export default function Graphic() {
  let data = [], intDate;
  const store = useSelector(state => state)
  
    for (intDate in store.datesEndPoint["Time Series (Daily)"]) {
      if (store.startData <= intDate && store.endData >= intDate) {
        const dates = store.datesEndPoint["Time Series (Daily)"][intDate];
        data.push({ name: intDate, "1. open": dates["1. open"], "2. high": dates["2. high"], "3. low": dates["3. low"], "4. close": dates["4. close"] })
      }
    }
  
  return (
    <>
    {store.startData >= store.endData? <Alert data-testid="form-error" color="danger"> invalid date    </Alert>:null}
      <LineChart
        width={window.innerWidth / 1.5}
        height={200}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Line type="monotone" dataKey="1. open" stroke="#8884d8" />
        <Line type="monotone" dataKey="2. high" stroke="#82ca9d" />
        <Line type="monotone" dataKey="3. low" stroke="#8D0000" />
        <Line type="monotone" dataKey="4. close" stroke="#0000CD" />
      </LineChart>
    </>
  )

}
