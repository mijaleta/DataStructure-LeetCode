# the recursion is breaking the bigger problem into smaller and solving it 

# the following is about the factirial fucntion i  am tain ti as an example


def factorial(n):
    if n==0:
        return 1
    
    return n * factorial(n-1)

print(factorial(3))