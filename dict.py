dict = {"a":"You choosed a",
        "b":"You choosed b",
        "c":"You choosed c",
        "ñ":"you choosed ñ",
        "pp":"That's not a single letter, double p."}

val = input("type a letter: ")

try:
    print(dict[val])
except:
    print("choosed something else")