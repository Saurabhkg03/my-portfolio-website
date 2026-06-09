import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract Projects and Experience
projects_match = re.search(r'(        {/\* PROJECTS \*/}.*?)(        {/\* EXPERIENCE \*/})', content, re.DOTALL)
experience_match = re.search(r'(        {/\* EXPERIENCE \*/}.*?)(        {/\* EDUCATION \*/})', content, re.DOTALL)

if projects_match and experience_match:
    projects_content = projects_match.group(1)
    experience_content = experience_match.group(1)
    
    # Update numbering
    projects_content = projects_content.replace('03 / Featured Work', '04 / Featured Work')
    experience_content = experience_content.replace('04 / Experience', '03 / Experience')
    
    # Add more button to projects
    more_btn = """          <div className="flex justify-center pt-4">
            <a href="/projects" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-4 py-2">
              More Projects
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </section>
"""
    projects_content = projects_content.replace('        </section>\n', more_btn)

    # Replace in content
    new_content = content[:projects_match.start()] + experience_content + projects_content + content[experience_match.end(2):]
    
    with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('Successfully swapped sections')
else:
    print('Could not find sections')
