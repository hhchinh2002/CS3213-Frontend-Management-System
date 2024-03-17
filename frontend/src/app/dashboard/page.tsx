"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
<<<<<<< HEAD
  Spacer,
=======
  Image,
  Spacer,
  Accordion,
  AccordionItem,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
>>>>>>> 920baa0 (Update to tsx file)
  Button,
} from "@nextui-org/react";

const DashBoard = () => {
  const list = [
    {
      title: "Assignment 1",
      deadline: new Date(2024, 1, 28, 23, 59, 0),
    },
    {
      title: "Assignment 2",
      deadline: new Date(2024, 2, 28, 23, 59, 0),
    },
    {
      title: "Assignment 3",
      deadline: new Date(2024, 3, 28, 23, 59, 0),
    },
    {
      title: "Assignment 4",
      deadline: new Date(2024, 4, 28, 23, 59, 0),
    },
    {
      title: "Assignment 5",
      deadline: new Date(2024, 5, 28, 23, 59, 0),
    },
  ];

<<<<<<< HEAD
=======
  const submissions = [
    {
      assignment: "Assignment 1",
      date: new Date(2024, 1, 28, 23, 59, 0),
    },
    {
      assignment: "Assignment 1",
      date: new Date(2024, 1, 29, 23, 59, 0),
    },
    {
      assignment: "Assignment 2",
      date: new Date(2024, 2, 28, 23, 59, 0),
    },
    {
      assignment: "Assignment 2",
      date: new Date(2024, 2, 29, 23, 59, 0),
    },
    {
      assignment: "Assignment 3",
      date: new Date(2024, 3, 28, 23, 59, 0),
    },
    {
      assignment: "Assignment 4",
      date: new Date(2024, 4, 28, 23, 59, 0),
    },
    {
      assignment: "Assignment 5",
      date: new Date(2024, 5, 28, 23, 59, 0),
    },
  ];
>>>>>>> 920baa0 (Update to tsx file)
  return (
    <div className="m-4">
      <b>Assignments</b>
      <Spacer y={4} />
<<<<<<< HEAD
      <div className="gap-2 grid grid-cols-1 sm:grid-cols-1">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            className="bg-white shadow-md"
            // isPressable
            // onPress={() => console.log("item pressed")}
          >
            <CardBody>
              <div className="flex justify-between items-start">
                <div>
                  <b className="text-black">{item.title}</b>
                  <p className="text-black">
                    Deadline: {item.deadline.toUTCString()}
                  </p>
                </div>
                <Button color="primary" size="md">
                  New Attempt
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
=======
      <Accordion variant="splitted">
        {list.map((item, index) => (
          <AccordionItem
            key={index}
            aria-label={item.title}
            title={item.title}
            className="bg-blue-200 text-blue-800"
          >
            <Button size="md">Medium</Button>
            <Table aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>DATE</TableColumn>
                <TableColumn>VIEW</TableColumn>
              </TableHeader>
              <TableBody>
                {submissions
                  .filter((submission) => submission.assignment === item.title)
                  .map((submission, index) => (
                    <TableRow key={index}>
                      <TableCell>{submission.date.toLocaleString()}</TableCell>
                      <TableCell>
                        <Button color="primary">Click to view</Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </AccordionItem>
        ))}
      </Accordion>
>>>>>>> 920baa0 (Update to tsx file)
    </div>
  );
};

export default DashBoard;
