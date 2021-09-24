# Side Web 2.0 XML Generator

In-progress project.
The web app will help generate the import XML file for Side web 2.0. The XML currently allows users to import the following custom post types (CPT):
Members (Team Member)
Member-profiles (CAPP)
Future plan:
More in-depth ‘members’ input.
More in-depth ‘member-profiles’ input.
Community details generator.
Retrieve ‘members’ data directly from SFDC.



## Instruction (of the newest version)

### Adding 1 agent at a time to the agent list

Agents’ name: enter agent’s full name, 1 agent at a time.
Click ‘Add agent’. It will add the above agent to the agent list.
Click ‘Show All Agents’ to show the current list of added agents.
Click ‘Clear All’ to remove all agents from the agent list (start over in case of a mistake or a new batch).
‘Generate All’ button will generate an import XML for both ‘members’ and ‘member-profiles’ CPT.
‘Generate Members Only’ button will generate an import XML for ‘member’ CPT.
‘Generate CAPPs Only’ button will generate an import XML for ‘member-profiles’ CPT.

## Change Log
v.0.1:
Adding agent as an object with the following properties: name, data
Using exported XML from DPP team.

## Author, Contributors

Zachary Truong

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.