import yaml, json, os

class Loader(yaml.SafeLoader):

    def __init__(self, stream):

        self._root = os.path.split(stream.name)[0]

        super(Loader, self).__init__(stream)

    def include(self, node):

        filename = os.path.join(self._root, self.construct_scalar(node))

        with open(filename, 'r') as f:
            return yaml.load(f, Loader)

Loader.add_constructor('!include', Loader.include)

with open('src/data/bot/conversation-tree/root.yml', 'r') as ymlFile:
    data = yaml.load(ymlFile, Loader)
    with open('src/data/bot/conversation-tree.json', 'w') as jsonFile:
        jsonFile.write(json.dumps(data))
