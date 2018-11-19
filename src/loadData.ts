import { csv } from 'd3';
interface Passenger {
  ticketId: string;
  age: string;
  name: string;
  sex: string;
  survived: string;
  ticketClass: string;
}

export function loadData() {
  return new Promise<Passenger[]>((resolve, reject) => {
    csv('/data.csv')
      .then((rawData: any[]) => {
        const dataset = rawData.map(d => ({
          ticketId: d.PassengerId as string,
          age: d.Age as string,
          name: d.Name as string,
          sex: d.Sex as string,
          survived: d.Survived as string,
          ticketClass: d.Pclass as string
        }));
        resolve(dataset);
      })
      .catch(reject);
  });
}
