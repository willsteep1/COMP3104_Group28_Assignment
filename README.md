# COMP3104_Group28_Assignment
Group project for COMP3104 DevOps

Khoa Huynh (101418497) https://github.com/khoahuynh1901
Angel Masih (101463514) https://github.com/angel-masih 
Ryan Luu (101309336) https://github.com/SoundSkelton
Will Steep (101435500) https://github.com/willsteep1

Project Description:

This repository hosts the group assignment for Assignment 1 of the COMP3104 DevOps course. The main focus of the assignment is to get students familiar with collaborative Git workflows, branching strategies, as well as CI integration. 


Setup Instructions:

Clone the repository from the command line using: git clone https://github.com/willsteep1/COMP3104_Group28_Assignment.git

To create a new branch and switch to it immediately after creation, you can use the command: git checkout -b "branch-name"




CI Pipeline:

This project utilizies GitHub Actions for continuous integration. A unit test has been written that runs with the build pipeline. This test checks to ensure that every file within the 'content'
directory follows the appropriate naming convention defined by the assignment's specifications (student#_ + gb.txt || devops.txt || sdlc.txt )

If an innapropriate name is detected, the build will throw an error and exit pre-maturely. 


Branching Strategy:

Each member creates their own branch following the naming convention 'STUDENTID-NAME'. All changes made are merged into the main branch via Pull Requests. A pull request template is used to ensure proper documentation of merge attempts. 