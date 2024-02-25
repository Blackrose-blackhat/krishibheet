"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import consumerLogo from "@/public/assets/images/shopping-review.png";
import sellerLogo from "@/public/assets/images/money-idea.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();
  const handleSubmit = (e:any) => {
    e.preventDefault();
    router.push("/consumer");
  };
  return (
    <main className="w-full flex flex-row h-[90vh] items-center justify-center align-middle ">
      <Tabs defaultValue="consumer" className="w-[400px] ">
        <TabsList className="grid w-full grid-cols-2 shadow-xl shadow-neutral-800">
          <TabsTrigger value="consumer">Consumer</TabsTrigger>
          <TabsTrigger value="seller">Seller</TabsTrigger>
        </TabsList>
        <TabsContent value="consumer">
          <form onSubmit={handleSubmit}>
            <Card className="p-5 shadow-xl shadow-neutral-800">
              <CardHeader>
                <CardTitle>
                  <div className="flex flex-row items-center gap-3">
                    <p>Consumer Account</p>
                    <Image
                      src={consumerLogo}
                      height={32}
                      width={42}
                      alt="consumer"
                      className="-mt-5"
                    />
                  </div>
                </CardTitle>
                <CardDescription>
                  Login here if you are a consumer only!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 w-full">
                <div className="space-y-1">
                  <Label htmlFor="name">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="johndoe@example.com"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="Password">Password</Label>
                  <Input id="password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="bg-green-600">
                  Submit
                </Button>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>
        <TabsContent value="seller">
          <Card className="p-5 shadow-xl shadow-neutral-800">
            <CardHeader>
              <CardTitle>
                <div className="flex flex-row items-center gap-3">
                  <p>Seller Account</p>
                  <Image
                    src={sellerLogo}
                    height={32}
                    width={92}
                    alt="consumer"
                    className="-mt-7"
                  />
                </div>
              </CardTitle>
              <CardDescription>Login to your seller account!!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Email</Label>
                <Input
                  id="seller_email"
                  type="email"
                  placeholder="johndoe@example.com"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new"> password</Label>
                <Input id="seller_pass" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="bg-green-600">
                Submit
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
