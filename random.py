import random

#def readfile(filename):
#    text_file = open (str(filename))
#    global member_name
#    member_name = text_file.read().split('\n')
#def member():
#    member = random.choice(member_name)
#    print(member)
   
#def choose():
#    text_file = open (str(choice+".txt"))
#    global member_name
#    member_name = text_file.read().split('\n')


    
    

group_file = open ("group.txt") 
group = group_file.read().split('\n') #Split text into list
choice = random.choice(group) #Randomize group selection
print(choice)
text_file = open (str(choice+".txt")) #Open file detailing member list
member_group = text_file.read().split('\n\n')#Split text into list by kisei
member_list = random.choice(member_group) #Randomize kisei
member_list = member_list.split('\n') #Split kisei list into member list
if '期生' in member_list[0]: #Deal with group with kisei concept
    print(member_list.pop(0)) #Obtain and print kisei
member = random.choice(member_list) #Randomize member selection
print(member)



#print(choice)
#choose()
#member()
#if choice == "欅":
#    kisei = random.randint(1,2)
#    print(kisei)
#    if kisei == 1:
#        readfile("Keyaki_1st.txt")
#        member()
#    elif kisei == 2:
#        readfile("Keyaki_2nd.txt")
#        member()
#elif choice == "日向":
#    kisei = random.randint(1,3)
#    print(kisei)
#    if kisei == 1:
#        readfile("Hinata_1st.txt")
#        member()
#    elif kisei == 2:
#        readfile("Hinata_2nd.txt")
#        member()
#    elif kisei == 3:
#        print ("上村ひなの")
#elif choice == "=LOVE":
#    readfile("=LOVE.txt")
#    member()
#elif choice == "NGT48":
#    kisei = random.randint(1,2)
#    print(kisei)
#    if kisei == 1:
#        readfile("NGT48_1st.txt")
#        member()
#    elif kisei == 2:
#        readfile("NGT48_2nd.txt")
#        member()
