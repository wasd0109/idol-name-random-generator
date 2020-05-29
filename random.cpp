#include <iostream>
#include <vector>
#include <string>
#include <fstream>
#include <time.h>

inline int randint(int max)
{
    if (max == 0)
        throw "Cannot divide by zero";
    else
    {
        srand(time(NULL));
        return rand() % max;
    }
}

std::vector<std::string> read_groups_to_vector(const std::string &filename)
{
    std::string group;
    std::vector<std::string> groups;
    std::ifstream ifs(filename.c_str());
    while (!ifs.eof())
    {
        ifs >> group;
        groups.push_back(group);
    }
    return groups;
}

std::vector<std::string> read_members_to_vector(const std::string &filename)
{
    std::string member;
    std::vector<std::string> members;
    std::ifstream ifs(filename.c_str());
    while (!ifs.eof())
    {
        ifs >> member;
        members.push_back(member);
    }
    return members;
}

std::string random_choice_from_vector(const std::vector<std::string> &v)
{
    int offset = 1;
    srand(time(NULL));
    int random = randint(v.size());
    return v[random];
}

bool determine_kisei_system(std::vector<std::string> &v)
{
    std::string kisei_indicator = "ä˙ê∂";
    if (v[0].find(kisei_indicator) != std::string::npos)
    {
        return true;
    }
    return false;
}

void remove_kisei_indicator(std::vector<std::string> &v)
{
    std::string kisei_indicator = "ä˙ê∂";
    for (int i = 0; i < v.size(); i++)
    {
        if (v[i].find(kisei_indicator) != std::string::npos)
            v.erase(v.begin() + i);
    }
}

void print(const std::string &group, const std::string &member)
{
    std::cout << group << "\n"
              << member;
}

int main()
{
    std::vector<std::string> group_list, member_list;
    std::string group_choice, member_choice, group_list_filename = "group", extension = ".txt";
    group_list = read_groups_to_vector(group_list_filename + extension);
    group_choice = random_choice_from_vector(group_list);
    member_list = read_members_to_vector(group_choice + extension);
    bool kisei = determine_kisei_system(member_list);
    if (kisei)
    {
        remove_kisei_indicator(member_list);
    }
    member_choice = random_choice_from_vector(member_list);
    print(group_choice, member_choice);
}