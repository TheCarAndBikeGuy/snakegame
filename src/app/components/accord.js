import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./accord.css";

const AccordionDemo = () => (
  <Accordion.Root
    className="AccordionRoot"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <Accordion.Item className="AccordionItem" value="item-1">
      <AccordionTrigger>Can You Customize Your Snake?</AccordionTrigger>
      <AccordionContent>
        To put it simply YES. You can choose many different snakes and customize
        them as you please! :)
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2">
      <AccordionTrigger>Who Was This Version Created By?</AccordionTrigger>
      <AccordionContent>
        This was created by TheCarAndBikeGuy on GitHub.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-3">
      <AccordionTrigger>Is It Free To Play?</AccordionTrigger>
      <AccordionContent>
        Yes, it is free and fun to play for everyone!
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-4">
      <AccordionTrigger>What Is The Top Score?</AccordionTrigger>
      <AccordionContent>
        There is no top score! you can go as long as possible or until the snake
        runs out of room ;)
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-5">
      <AccordionTrigger>When Was It Started?</AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
          It was started in September of 2024 ت
        </div>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames("AccordionTrigger", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

export default AccordionDemo;
