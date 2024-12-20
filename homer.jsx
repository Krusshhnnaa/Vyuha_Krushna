'use client';

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, Home, Users, Settings, Lock, Search, MoreVertical, MapPin, Briefcase, Calendar, Star, Moon, Sun, Mail, Phone, Globe, FileText } from 'lucide-react';

export default function PublicProfile() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme, mounted]);

  const userDetails = {
    name: "Tarush Nigam",
    role: "Senior UX Designer",
    location: "Mumbai",
    email: "tarushnigam.com",
    phone: "+1 (555) 123-4567",
    website: "www.tarushnigam.com",
    experience: "8 years",
    completedProjects: 132,
    clientSatisfaction: 98,
  };

  const skills = ["UI/UX Design", "Wireframing", "Prototyping", "User Research", "Figma", "Adobe XD"];

  const pastContracts = [
    { company: "TechCorp", duration: "Jan 2022 - Dec 2022", role: "Lead UX Designer" },
    { company: "InnovateSoft", duration: "Mar 2021 - Nov 2021", role: "Senior UI Designer" },
    { company: "DesignHub", duration: "Jun 2020 - Feb 2021", role: "UX Researcher" },
  ];

  const ongoingContracts = [
    { company: "FutureTech", startDate: "Jan 2023", role: "Senior UX Consultant" },
    { company: "CreativeMinds", startDate: "Mar 2023", role: "UI/UX Workshop Facilitator" },
  ];

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-background transition-colors duration-200">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r">
        <div className="p-4 flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
            M
          </div>
          <span className="font-semibold">Metronic</span>
        </div>

        <div className="p-4">
          <Button className="w-full flex items-center gap-2 bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
            <Search className="h-4 w-4" /> Search
          </Button>
        </div>

        <nav className="px-4 space-y-6">
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-2">PAGES</p>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start gap-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
                <Home className="h-4 w-4" /> Overview
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2 bg-accent hover:bg-accent/80 transition-colors duration-200">
                <Users className="h-4 w-4" /> Public Profile
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
                <Settings className="h-4 w-4" /> My Account
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
                <Lock className="h-4 w-4" /> Authentication
              </Button>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <div className="border-b">
          <div className="flex justify-between items-center px-6 py-4">
            <div>
              <h1 className="text-xl font-semibold">Public Profile</h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Home</span>
                <span>/</span>
                <span>Public Profile</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
                <FileText className="h-4 w-4 mr-2" /> Export
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        <div className="p-6">
          <Card className="mb-6 hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg" alt={userDetails.name} />
                  <AvatarFallback>JK</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-semibold mb-1">{userDetails.name}</h2>
                  <p className="text-muted-foreground mb-2">{userDetails.role}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{userDetails.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      <span>{userDetails.email}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      <span>{userDetails.phone}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="h-4 w-4" />
                      <span>{userDetails.website}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow duration-200">
              <CardHeader>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">{userDetails.experience}</div>
                <p className="text-muted-foreground">Years in the industry</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow duration-200">
              <CardHeader>
                <CardTitle>Completed Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">{userDetails.completedProjects}</div>
                <p className="text-muted-foreground">Successful deliveries</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow duration-200">
              <CardHeader>
                <CardTitle>Client Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">{userDetails.clientSatisfaction}%</div>
                <Progress value={userDetails.clientSatisfaction} className="h-2" />
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 hover:shadow-md transition-shadow duration-200">
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card className="hover:shadow-md transition-shadow duration-200">
              <CardHeader>
                <CardTitle>Past Contracts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pastContracts.map((contract, index) => (
                    <div key={index} className="flex items-start hover:bg-accent p-2 rounded-md transition-colors duration-200">
                      <Briefcase className="h-5 w-5 mt-0.5 mr-2" />
                      <div>
                        <h4 className="font-semibold">{contract.company}</h4>
                        <p className="text-sm text-muted-foreground">{contract.role}</p>
                        <p className="text-sm text-muted-foreground">{contract.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow duration-200">
              <CardHeader>
                <CardTitle>Ongoing Contracts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ongoingContracts.map((contract, index) => (
                    <div key={index} className="flex items-start hover:bg-accent p-2 rounded-md transition-colors duration-200">
                      <Calendar className="h-5 w-5 mt-0.5 mr-2" />
                      <div>
                        <h4 className="font-semibold">{contract.company}</h4>
                        <p className="text-sm text-muted-foreground">{contract.role}</p>
                        <p className="text-sm text-muted-foreground">Started: {contract.startDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
