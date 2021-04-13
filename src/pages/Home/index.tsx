/* eslint-disable react/no-array-index-key */
import React from 'react';

import Container from '../../components/Container';

import ptBr from '../../lang/ptBr';

const Home: React.FC = () => {
  const actualHour = '1';
  const actualMinute = '0';

  return (
    <Container>
      <div>
        <table>
          {ptBr.grid.map((row, i) => {
            return (
              <tr>
                {row.map((column, j) => {
                  let color = 'black';
                  ptBr.logic.hours[actualHour].forEach((val) => {
                    if (val.index === i) {
                      if (j >= val.indexStart && j <= val.indexEnd) {
                        color = 'red';
                      }
                    }
                  });

                  ptBr.logic.minutes[actualMinute].forEach((val) => {
                    if (val.index === i) {
                      if (j >= val.indexStart && j <= val.indexEnd) {
                        color = 'red';
                      }
                    }
                  });
                  return <td style={{ color }}>{column}</td>;
                })}
              </tr>
            );
          })}
        </table>
      </div>
    </Container>
  );
};

export default Home;
