# the recursion is breaking the bigger problem into smaller and solving it 

# the following is about the factirial fucntion i  am tain ti as an example


def factorial(n):
    if n==0:
        return 1
    
    return n * factorial(n-1)

print(factorial(3))


# the folowing is another recursoion function which is all abotu the going down from the top 5 stair to the bottom 

def countDown(n):
    if n == 0:
        return 0
    print(n)
    countDown(n-1)

    
countDown(3)

 