with open('src/components/ScrollHeader.tsx', 'r') as f:
    c = f.read()
c = c.replace('href="#about"', 'href="/#about"')
c = c.replace('href="#projects"', 'href="/#projects"')
c = c.replace('href="#experience"', 'href="/#experience"')
with open('src/components/ScrollHeader.tsx', 'w') as f:
    f.write(c)
