import jarvis as j
import nltk
import math_expression_calculator as math_cal
import re
import inflect
import text2num
import classifier


print("1 -> wel", j.get_context("hello"))
print("2 -> wel", j.get_context("hi"))
print("3 -> cmd", j.get_context("hey! can you move up the ladder?"))
print("4 -> wel", j.get_context("hey, how are you today?"))
print("5 -> rand", j.get_context("how's today's weather"))
print("6 -> mth", j.get_context("add three to 4"))
# print("7 -> mth", j.get_context("what is the result for 7 multiplied by 6"))
# print("8 -> cmd", j.get_context("its dark in here"))
print("9 -> wel", j.get_context("hey man, What's your name"))
print("10 -> wel", j.get_context("I am Cao The Toan. who are you?"))
print("11 -> wel", j.get_context("Yo! we are Vietnamese"))
# print("12 -> wel", j.get_context("I am Jack"))
# print("13 -> rand", j.get_context("in India, where are dessert?")) #failed
# print("14 -> rand", j.get_context("where was typewriter invented"))
# print("15 -> cmd", j.get_context("please play a song for me"))
# print("16 -> mth", j.get_context("please calculate 3*4/2-1"))
print("17 -> cmd", j.get_context("turn the rover to right"))
print("18 -> mth", j.get_context("what is 3 + 6 - 8 * 2 + 3 / 6"))
print("19 -> rand", j.get_context("where is Atlanta?"))
print("20 -> cmd", j.get_context("hey, please turn the volume down"))
print("21 -> rand", j.get_context("who is Obama")) #failed


print(classifier.classify("translate good man"))
print(classifier.classify("hey man, What's your name"))
#print(classifier.classify("hey man, I am Cao The Toan"))
# print(classifier.classify("Yo! we are Vietnamese"))
print(classifier.classify("hello"))
# print(classifier.classify("in India, where are dessert?"))
#print(classifier.classify("please turn on the lights"))

# print(classifier.classify("Uttar Pradesh"))
#print(classifier.classify("Who is Obama"))
#print(classifier.classify("Temperature London"))

# subtract 4 from minus 3

# print(math_cal.get_math_evaluation("evaluate 3 square minus 2 cube"))
# print("#############################  1")
# print(math_cal.get_math_evaluation("calculate 6 square minus 3 cube plus square of 4 minus cube of 2"))
# print("#############################  17")
# print(math_cal.get_math_evaluation("calculate 10 square plus square root of 100 minus cube of 4 plus cube root of 8"))
# print("#############################  48")
# print(math_cal.get_math_evaluation("what is 5 multiplied by 5 plus square of 4"))
# print("#############################  41")
# print(math_cal.get_math_evaluation("what is 4 divided by 2 plus cube of 7"))
# print("#############################  345")
# print(math_cal.get_math_evaluation("what is 25 added to 5 plus square root of 9"))
# print("#############################  33")
# print(math_cal.get_math_evaluation("what is cube root of 8 divided by 7"))
# print("#############################  0.2857142857142857")
# print(math_cal.get_math_evaluation("evaluate 2 plus 8 multiplied by cube root of 8 divided by 4 minus 3"))
# print("#############################  3")
# print(math_cal.get_math_evaluation("multiply seven with cube root of eight"))
# print(math_cal.get_math_evaluation("divide 30 by square root of 4 plus 3 square"))
# print(math_cal.get_math_evaluation("cube root of 64 divided by 10 minus 2 cube plus square of 4"))
#
# print(math_cal.get_math_evaluation("what is three multiplied to 4"))
# print("#############################  12")
# print(math_cal.get_math_evaluation("can you answer what 1898 subtracted from 100 is?"))
# print("#############################  -1798")
# print(math_cal.get_math_evaluation("what is the value for 10 divided by 2?"))
# print("#############################  5")
# print(math_cal.get_math_evaluation("multiply 7 with 5"))
# print("#############################  35")
# print(math_cal.get_math_evaluation("multiply 10 by 3"))
# print("#############################  30")
# print(math_cal.get_math_evaluation("add 5 to 2"))
# print("#############################  7")
# print(math_cal.get_math_evaluation("subtract 2 from 9"))
# print("#############################  7")
# print(math_cal.get_math_evaluation("what is 5 minus 3"))
# print("#############################  2")
# print(math_cal.get_math_evaluation("divide 14 by 2"))
# print("#############################  7")
# print(math_cal.get_math_evaluation("answer to 10 / 5"))
# print("#############################  2")
# print(math_cal.get_math_evaluation("what is the result for 7 multiplied by 6"))
# print("#############################  42")
# print(math_cal.get_math_evaluation("add two thousand three hundred seventy six to 100"))
# print("#############################  2476")
# print(math_cal.get_math_evaluation("what is three hundred seventy five multiplied by 100"))
# print("#############################  37500")
# print(math_cal.get_math_evaluation("eleven million seventy five multiplied by 100")) #failed
# print("#############################  110007500 FAILED")
# print(math_cal.get_math_evaluation("what do we get when 100 is added to 23?"))
# print("#############################  123")
# print(math_cal.get_math_evaluation("multiply 1 to 2 minus 6 plus 10 multiplied by 2 divided by 4"))
# print("#############################  1")
# print(math_cal.get_math_evaluation("what is 10 multiplied by 6 plus 2 minus 6 plus 10 multiplied by 2 divided by 4"))
# print("#############################  61")
# print(math_cal.get_math_evaluation("calculate forty two thousand one hundred seventy five divided by 100"))
# print("#############################  421.75")
# print(math_cal.get_math_evaluation("evaluate 10 / 2 - 6 + 7"))
# print("#############################  6")
# print(math_cal.get_math_evaluation("what is seven multiplied by 6"))
# print("############################# 42")
# print(math_cal.get_math_evaluation("what is eight + six"))
# print("############################# 14")
# print(math_cal.get_math_evaluation("what is eight minus six"))
# print("############################# 2")
# print(math_cal.get_math_evaluation("what is eight plus six"))
# print("############################# 14")
# print(math_cal.get_math_evaluation("what is eleven million X 10")) #failed
# print("#############################  11000000 FAILED")
# print(math_cal.get_math_evaluation("what is 7 x 8"))
# print("#############################  56")
# print(math_cal.get_math_evaluation("please multiply 7 by 6"))
# print("#############################  42")
# print(math_cal.get_math_evaluation("divide 60 by 6"))
# print("#############################  10")
# print(math_cal.get_math_evaluation("add 10 to 20"))
# print("#############################  30")
# print(math_cal.get_math_evaluation("subtract 5 from 100"))
# print("#############################  95")
# print(math_cal.get_math_evaluation("add 5 to 100"))
# print("#############################  105")
# print(math_cal.get_math_evaluation("multiply 5 with 100"))
# print("#############################  500")
# print(math_cal.get_math_evaluation("divide 100 by 5"))
# print("#############################  20")
# print(math_cal.get_math_evaluation("5 subtracted from 100"))
# print("############################# 95")
# print(math_cal.get_math_evaluation("5 plus 10"))
# print("#############################  15")
# print(math_cal.get_math_evaluation("5 minus 10"))
# print("#############################  -5")
# print(math_cal.get_math_evaluation("5 multiplied by 100"))
# print("#############################  500")
# print(math_cal.get_math_evaluation("5 divided by 10"))
# print("#############################  0.5")
# print(math_cal.get_math_evaluation("calculate 5 subtracted from 10"))
# print("#############################  5")
# print(math_cal.get_math_evaluation("calculate 90 - 40 x 20 / 10 + 3"))
# print("#############################  13")
# print(math_cal.get_math_evaluation("what is twelve billion divided by 1000 x 2 minus 100000")) # FAILED CASE
# print("############################# FAILED")
