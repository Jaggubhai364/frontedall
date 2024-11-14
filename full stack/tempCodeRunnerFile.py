import math

# Area of Triangle
base = float(input("Enter the base of the triangle: "))
height = float(input("Enter the height of the triangle: "))
triangle_area = 0.5 * base * height
print(f"Area of Triangle: {triangle_area}")

# Area of Rectangle
length = float(input("Enter the length of the rectangle: "))
width = float(input("Enter the width of the rectangle: "))
rectangle_area = length * width
print(f"Area of Rectangle: {rectangle_area}")

# Area of Circle
radius = float(input("Enter the radius of the circle: "))
circle_area = math.pi * radius * radius
print(f"Area of Circle: {circle_area}")

# Area of Sphere
sphere_area = 4 * math.pi * radius * radius
print(f"Area of Sphere: {sphere_area}")
