<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <head>
                <title><xsl:value-of select="/resume/Name/First"/>'s Resume</title>
                <link href="resume.css" rel="stylesheet"/>
            </head>
            <body>
                <div id="size">
                    <div class="main">
                        <div id="name">
                            <h1><xsl:value-of select="/resume/Name/First"/>&#160;<xsl:value-of select="/resume/Name/Last"/></h1>
                            <h2><xsl:value-of select="/resume/Name/Role"/></h2>
                        </div>

                        <div id="contact">
                            <xsl:for-each select="/resume/ContactInfo">
                                <ul>
                                    <li>Email: <xsl:value-of select="Email"/></li>
                                    <li>Phone: <xsl:value-of select="Phone"/></li>
                                </ul>
                            </xsl:for-each>
                        </div>
                    </div>
                </div>
            </body>

        </html>

    </xsl:template>

</xsl:stylesheet>