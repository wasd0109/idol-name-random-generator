import random
group = "欅坂"
text_file = open(group + str("_vote.txt"))  # Open file detailing member list
member_list = text_file.read().split('\n')
random.shuffle(member_list)
while len(member_list):
    member1 = member_list.pop()  # Randomize member selection
    member2 = member_list.pop()
    print (member1+"\n"+member2+"\n\n")
