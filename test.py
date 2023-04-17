import re

# 打开文件并读取内容
with open('example.txt', 'r') as file:
    content = file.read()

# 使用正则表达式匹配每一段的标题、作者和年份
pattern = r'Title: (.*?)\nAuthor: (.*?)\nYear: (\d{4})'
matches = re.findall(pattern, content, re.DOTALL)

print(matches)
# 如果匹配成功，则对每一段内容进行修改
if matches:
    for match in matches:
        # 提取匹配到的标题、作者和年份
        title = match[0]
        author = match[1]
        year = match[2]

        # 对每一段内容进行修改
        new_title = title.upper()
        new_author = author.lower()
        new_year = str(int(year) + 10)

        # 将修改后的内容写回文件
        pattern = r'Title: ' + title + r'\nAuthor: ' + author + r'\nYear: ' + year
        new_pattern = r'Title: ' + new_title + r'\nAuthor: ' + new_author + r'\nYear: ' + new_year
        new_content = re.sub(pattern, new_pattern, content, flags=re.DOTALL)

        # 更新文件内容
        content = new_content

    with open('example.txt', 'w') as file:
        file.write(content)

    print('修改完成。')
else:
    print('未找到匹配的内容。')