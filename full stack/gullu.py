# my_list = [10, 20, 30, 40, 50]
# my_string = "Python"

# # Basic slicing
# print(my_list[1:4])      # Output: [20, 30, 40] (from index 1 to 3)
# print(my_string[2:5])    # Output: "tho" (from index 2 to 4)

# # Slicing with step
# print(my_list[0:5:2])    # Output: [10, 30, 50] (every second element)
# print(my_string[::2])    # Output: "Pto" (every second character)

# # Omitting start or stop
# print(my_list[:3])       # Output: [10, 20, 30] (from start to index 2)
# print(my_string[3:])     # Output: "hon" (from index 3 to end)

# # Negative slicing
# print(my_list[::-1])     # Output: [50, 40, 30, 20, 10] (reversed list)
# print(my_string[-3:])    # Output: "hon" (last three characters)
# print(my_list[3:5])
# print(my_list[:])
# print(my_list[0:5:1])
# print(my_list[::2])
# print(my_list[:4])
# print(my_list[1:])
# my_string="python"
# print(my_string[0:6])
# print(my_string[:6])
# print(my_string[1:])
# print(my_string[0:6:2])
# my_tuple=(1,"gullu",3.14,"mullu")
# print(my_tuple[0:2])
# my_list=[10,20,30,40,50,60,70]
# print(my_list[-1])
# print(my_list[-5:])
# print(my_list[:-5])
# print(my_list[-5:-1:2])
# reversed_list = my_list[::-2]
# print(my_list[-7:-4])
# print(reversed_list)  
# print(my_list[1:-4])
# print(my_list[-7:-4])
# print(my_list[-5:-1:1])
# my_string="baijayant"
# reversed_my_string = my_string[::-1]
# print(reversed_my_string)
# print(my_string[1:-1])
# import copy
# list_1=[1,2,3,4,5,6,7,8,9,10]
# list_2=list_1
# print(list_1[0:-1])
# print(list_2[0:-1])
# print(list_1[0:-1])
# print(list_2[0:-1])
# print(id(list_1))
# print(id(list_2))
# list_3=copy.copy(list_1)
# print(list_3[0:-1])
import copy
list_4=[10,20,[30,40]]
list_5=copy.copy(list_4)
print(list_4[2][0])
print(list_5[2][0])
listl1=["bj","harsh","asish","rishi"]
for name in listl1:
    print(name)
