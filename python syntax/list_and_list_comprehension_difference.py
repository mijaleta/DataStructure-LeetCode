names = ["miretu", "taku","eebise"]

for name in names:
    print(name)

# when we use the the list comprehension we can do like the following 

name_list = [name for name in names]
print(name_list) 



# making cpiatle the each letter of the word


fruits = ["banana", "apple", "mango"]

capitalized_fruits = [fruit.upper() for fruit in fruits]
print(capitalized_fruits)