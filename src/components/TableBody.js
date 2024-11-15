import React from "react";
import TableRow from "./TableRow";

function TableBody({Participationdata, setParticipationdata }) {
   // console.log(Participationdata)

  return (
    <tbody className="text-xs ">
      {Participationdata.length > 0 ? (
        Participationdata.map((participant, index) => {
          return (
            <TableRow
              key={participant["Student Email"] || index}
              participant={participant}
            />
          );
        })
      ) : (
        <div className="text-lg">No User Found</div>
      )}
    </tbody>
  );
}

export default TableBody;
