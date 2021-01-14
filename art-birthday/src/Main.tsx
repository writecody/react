import React from "react";
import { Box } from "./Box"
export const Main: React.FC = () => {
  const squares = new Array(25).fill('null');

  return (
    <div>
      <h1>ART BIRTHDAY</h1>
      <ol>
        <li>Enter your birthday.</li>
        <li>View a work of art based on your birthday.</li>
      </ol>
      <div style={{display: 'flex', width: '80%', height: '400px', flexWrap: 'wrap', margin: 'auto'}}>
        {squares.map(item => {
          return (<Box />)
        })
        }
      </div>
      <form action="#">
        <fieldset>
          <label htmlFor="day">DAY<input type="text" id="day" placeholder="##" name="day" />
          </label>
          <label htmlFor="month">MONTH<input type="text" id="month" placeholder="##" name="month" />
          </label>
          <label htmlFor="year">YEAR <input type="text" id="year" placeholder="####" name="year" />
          </label>
          <button type="submit">VIEW</button>
        </fieldset>
      </form>

      <div>
        <input type="reset" value="RESET" />
        <button>PRINT</button>
      </div>
    </div>)
}
