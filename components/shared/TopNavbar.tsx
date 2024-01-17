"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import logo from "@/public/assets/images/logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { PinLeftIcon, TriangleRightIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "🌾 Crop waste",
    href: "/docs/primitives/alert-dialog",
    description:
      "Crop waste refers to the organic matter left after the harvesting and processing of crops. It can be used as compost or biofuel.",
  },
  {
    title: "🐄 Animal Waste",
    href: "/docs/primitives/hover-card",
    description:
      "Animal waste, also known as manure, is a natural byproduct of animal farming. It can be used as fertilizer in agriculture.",
  },
  {
    title: "🏭 Processing waste",
    href: "/docs/primitives/progress",
    description:
      "Processing waste is the waste generated during the processing of raw materials. It can be recycled or disposed of in an environmentally friendly manner.",
  },
  {
    title: "☣️ Hazardous waste",
    href: "/docs/primitives/scroll-area",
    description:
      "Hazardous waste is waste that poses substantial or potential threats to public health or the environment.",
  },
];
const components2: { title: string; href: string; description: string }[] = [
  {
    title: "Space needed 1 hall",
    href: "/docs/primitives/alert-dialog",
    description: "Location :  Bhubaneshwar"
  },
  {
    title: "Space needed 2 hall",
    href: "/docs/primitives/hover-card",
    description: "Location :  Bhubaneshwar"
  },
  {
    title: "Space needed 3 hall",
    href: "/docs/primitives/progress",
    description: "Location :  Bhubaneshwar"
  },
  {
    title: "Space needed 4 hall",
    href: "/docs/primitives/scroll-area",
    description: "Location :  Bhubaneshwar"
  },
];



export function TopNavBar() {
  return (
    <div className="flex flex-row items-center justify-center px-5 py-2 bg-white/50">
      <Image src={logo} height={90} width={90} alt="logo" className="p-2" />
      <NavigationMenu className="w-full items-center justify-center p-5 px-12 ">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Agri Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem href="#" title="🌱 Pulses">
                  Pulses are a great source of protein. This category includes
                  lentils, chickpeas, beans and peas.
                </ListItem>
                <ListItem href="/docs" title="🌶️ Spices">
                  Spices are used to enhance the flavor and aroma of dishes.
                  This includes pepper, cardamom, cinnamon, etc.
                </ListItem>
                <ListItem href="/docs/installation" title="🍎 Fruits">
                  Fruits are rich in essential vitamins and minerals. They are
                  also high in fiber and low in calories.
                </ListItem>
                <ListItem
                  href="/docs/primitives/typography"
                  title="🥦 Vegetables"
                >
                  Vegetables are important sources of many nutrients, including
                  potassium, dietary fiber, folate (folic acid), vitamin A, and
                  vitamin C.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="🥜 Nuts">
                  Nuts are packed with heart-healthy fats, protein, vitamins,
                  and minerals.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="🍬 Sugars">
                  Sugars provide sweetness and are used in preserving food. They
                  are carbohydrates that provide energy to the body.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="🔩 Rubber">
                  Rubber is a versatile material used in various industries,
                  including automotive, construction, and more.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="🥛 Dairy">
                  Dairy products are rich in calcium and vitamin D. They include
                  milk, cheese, yogurt, and butter.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Agri waste</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Storage spaces </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components2.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                   <div className="flex flex-col gap-5">
                   {component.description}
                   <div className="w-full flex flex-row gap-2 items-start justify-start">
                   <Button className="bg-green-500 w-2/3 ">Allot</Button>
                   <Button className="bg-blue-500 w-2/3">Connect</Button>
                   </div>
                   

                   </div>

                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
