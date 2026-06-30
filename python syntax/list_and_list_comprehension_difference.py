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


# for the given name if it is kortu make it obboletti


names_of_family = ["miretu", "kisi","taku","kortu"]

pure_family = [name if name !="kortu" else  "kisi" for name in names_of_family]

print(pure_family)



# list of only the number not the letter

mix_of_number_and_letter = ['m', '1', 'f']

# only print th eletter 

only_letter = [name if name != '1' else "not letter" for name in mix_of_number_and_letter]

print(only_letter)  